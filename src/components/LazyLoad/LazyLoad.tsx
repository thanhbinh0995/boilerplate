import { Suspense } from 'react';

export default (
  component: () => Promise<{ default: ComponentProps<ComponentType<App.Any>> }>,
  isPreloader = true,
) => {
  const LazyComponent = lazy(component);

  const renderFallback = (): ReactNode => {
    if (isPreloader) {
      return <PreLoader />;
    }
    return <></>;
  };

  return (props: ComponentProps<ComponentType<App.Any>>) => (
    <Suspense fallback={renderFallback()}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
