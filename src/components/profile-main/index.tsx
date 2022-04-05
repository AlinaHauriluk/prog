import { ProfileSection, ProfileTabs, ProfileTab, ProfileContainer, ProfileTabList } from './profile-main'
import { TabPanel } from 'react-tabs';
import ProfileOrder from '../profile-order';
import ProfileTestimonials from '../profile-testomonials';
import ProfileFollowers from '../profile-followers';
import ProfileRating from '../profile-rating';

const ProfileMain = () => (
    <ProfileSection>
      <ProfileContainer>
        <ProfileTabs>
          <ProfileTabList>
            <ProfileTab>Delivery your Order</ProfileTab>
            <ProfileTab>Your Friends</ProfileTab>
            <ProfileTab>Dishes Rating</ProfileTab>
            <ProfileTab>Your Tetimonials</ProfileTab>
          </ProfileTabList>

          <TabPanel>
            <ProfileOrder />
          </TabPanel>
          <TabPanel>
            <ProfileFollowers />
          </TabPanel>
          <TabPanel>
            <ProfileRating />
          </TabPanel>
          <TabPanel>
            <ProfileTestimonials />
          </TabPanel>
        </ProfileTabs>
      </ProfileContainer>
    </ProfileSection>
)

export default ProfileMain