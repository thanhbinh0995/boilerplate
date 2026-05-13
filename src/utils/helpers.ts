import i18n from 'config/i18n';

export function windowRedirect(url: string) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export function windowOpen(link: string): void {
  if (!isEmpty(link) && typeof window !== 'undefined') {
    window.open(link);
  }
}

export function keysToCamelCase<T>(data: T): T {
  if (isArray(data)) {
    return data.map((item) => keysToCamelCase(item)) as T;
  } else if (isObject(data)) {
    const result: Record<string, App.Any> = {};
    keys(data).forEach((key) => {
      const value = get(data, [key]);
      result[camelCase(key)] = keysToCamelCase(value);
    });
    return result as T;
  }
  return data;
}

export function keysToSnakeCase<T>(data: T): T {
  if (isArray(data)) {
    return data.map((item) => keysToSnakeCase(item)) as T;
  } else if (isObject(data)) {
    const result: Record<string, App.Any> = {};
    keys(data).forEach((key) => {
      const value = get(data, [key]);
      result[snakeCase(key)] = keysToSnakeCase(value);
    });
    return result as T;
  }
  return data;
}

export function keysToKebabCase<T>(data: T): T {
  if (isArray(data)) {
    return data.map((item) => keysToKebabCase(item)) as T;
  } else if (isObject(data)) {
    const result: Record<string, App.Any> = {};
    keys(data).forEach((key) => {
      const value = get(data, [key]);
      result[kebabCase(key)] = keysToKebabCase(value);
    });
    return result as T;
  }
  return data;
}

export function divideString(value: string, count: number): string[] {
  const parts = Math.ceil(value.length / count);
  const result: string[] = [];
  let start = 0;
  while (start < value.length) {
    const subValue = value.substring(start, start + parts);
    result.push(subValue);
    start += parts;
  }
  return result;
}

export function translate(key: string, data: {} = {}): string {
  return i18n.t(key, data);
}

export function getErrorMessage(error: App.ResponseError): string {
  const firstError = head(get(error, 'errors'));
  if (!isEmpty(firstError)) {
    return firstError.msg;
  }
  return get(error, 'message', translate('oops_something_wrong'));
}

export function dataSerialization<T>(
  data: T,
  toFormData?: FormData,
  parentKey?: string,
): FormData {
  const formData = toFormData || new FormData();
  if (isObject(data) && !isDate(data) && !(data instanceof File)) {
    if (isEmpty(data) && isArray(data)) {
      formData.append(`${parentKey}[]`, '');
    } else {
      forEach(keys(data), (value: string) => {
        const key = parentKey ? `${parentKey}[${value}]` : value;
        dataSerialization(get(data, [value]), formData, key);
      });
    }
  } else {
    const value = (isNull(data) ? '' : data) as string;
    formData.append(parentKey, value);
  }

  return formData;
}

export function uuidv4(): string {
  return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (ch) => {
    const c = Number(ch);
    return (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16);
  });
}

export function isValidUrl(value: string): boolean {
  const pattern =
    /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?)):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
  return pattern.test(value);
}

export const dataURLtoFile = (dataUrl: string, filename: string): File => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const getFileExtension = (fileName: string) => {
  return fileName.split('.').pop().toLowerCase();
};

export const isTabletAndMobileOS = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.indexOf('android') > -1;
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return isAndroid || isIOS;
};
