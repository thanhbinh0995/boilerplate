import { withMemberZone } from 'components/HOC';
import HomeContainer from 'containers/HomeContainer';

const HomePage: FunctionComponent = () => <HomeContainer />;

export default withMemberZone()(HomePage);
