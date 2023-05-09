import { CardChip } from "../components/Profile/card_chip";
import Box from "@mui/material/Box";

export const Profile: React.FC = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "white", height: "100%" }}>
        <h1>Profile</h1>
        <CardChip
          name="Joe Smith"
          cardNumber="••1234"
          type="MasterCard"
          date="11/27"
          isMain={true}
          delete={() => {}}
        ></CardChip>
        <CardChip
          name="Joe Smith"
          cardNumber="••2345"
          type="Visa"
          date="11/27"
          isMain={false}
          delete={() => {}}
        ></CardChip>
        <CardChip
          name="Joe Smith"
          cardNumber="••2345"
          type="American Express"
          date="11/27"
          isMain={false}
          delete={() => {}}
        ></CardChip>
        <CardChip
          name="Joe Smith"
          cardNumber="••2345"
          type="Discover"
          date="11/27"
          isMain={false}
          delete={() => {}}
        ></CardChip>
      </Box>
    </div>
  );
};
