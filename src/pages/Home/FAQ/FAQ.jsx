import Heading from "../../../components/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Acordian from "../../../components/Acordian";

const FAQ = () => {
  return (
    <section>
      <Heading title="FAQ" />
      <div>
        <Tabs>
          <TabList>
            <Tab>User</Tab>
            <Tab>Delivery Man</Tab>
          </TabList>

          <TabPanel>
            <Acordian
              title="How I Contact to the Deliver?"
              description="After accepting your request, you will see the deliverers’ name, picture and user rating appear on your phone screen, along with a phone icon. Press the phone icon beside the contact number to call the deliverer."
            />
            <Acordian
              title="How DO I Cancel Order?"
              description="You can cancel the request up until the start of your delivery. To do this, you have to press either “Cancel Request” or a red “X” sign when applicable."
            />
            <Acordian
              title="How I Request for a Order?"
              description="To request a ride, you will have to select Pathao Parcels from the vertical button at the top of the screen. Then, you will have to select your pickup and drop-off location, fill in detailed information about the receiver of the item and select any one of the predefined product category which is closest to the item you are sending. Then you can review information before you request for a delivery pickup, after which Pathao Parcels can find the nearest deliverer around you and send them your way."
            />
          </TabPanel>
          <TabPanel>
            <Acordian
              title="How to be deliver person?"
              description="To be a bike rider of Pathao, please join us for a training session with the following documents: •National ID/Passport •Bike Registration Document •License (PROFESSIONAL/ NON-PROFESSIONAL) For further details, please attend our training sessions"
            />
            <Acordian
              title="How to be report issues?"
              description="If you have faced any inconvenience while using our service then please report us through the Pathao app so that we can help you and take necessary steps. Reporting process: Pathao App> Profile> History> Report Issue> I would like a refund> I was overcharged> then write ride details> Submit"
            />
            <Acordian
              title="When i will suspend?"
              description="Please call us at our helpline 13301 to know the suspension reason and duration. You have to visit our Walk-In-Support center to withdraw your suspension."
            />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;
