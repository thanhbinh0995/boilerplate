import DashboardLayout from 'components/Layouts/DashboardLayout';

const HomeContainer: FunctionComponent = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default HomeContainer;
