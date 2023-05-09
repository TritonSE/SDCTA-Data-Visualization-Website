import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

interface CardProps {
  name: string;
  cardNumber: string;
  type: string;
  date: string;
}

const CardTypes = new Map<string, string>([
  ["MasterCard", "./MasterCard.png"],
  ["Discover", "./Discover.png"],
  ["Visa", "./Visa.jpeg"],
  ["American Express", "./AmericanExpress.png"],
]);

export const CardChip: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div>
      <Card
        raised={false}
        sx={{
          backgroundColor: "#EBEBEB",
          boxShadow: "none",
          minWidth: "300px",
          maxWidth: "400px",
          margin: "10px",
          borderRadius: "16px",
          alignItems: "center",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={4}>
            <CardMedia
              component="img"
              sx={{
                display: "inline",
                maxHeight: "29px",
                width: "auto",
                objectFit: "scale-down",
                marginTop: "15px",
                marginLeft: "22px",
              }}
              image={CardTypes.get(props.type)}
              alt="MasterCard"
            />
          </Grid>
          <Grid item textAlign="center" xs={4}></Grid>
          <Grid item textAlign="right" xs={4}>
            <DeleteIcon
              color="error"
              sx={{
                marginTop: "14px",
                marginRight: "20px",
                marginBottom: "15px",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                marginBottom: "15px",
                marginLeft: "22px",
                fontFamily: "Helvetica",
              }}
            >
              {props.name}
            </Typography>
          </Grid>
          <Grid item textAlign="center" xs={4}>
            <Typography sx={{ fontFamily: "Helvetica" }}>
              {props.cardNumber}
            </Typography>
          </Grid>
          <Grid
            item
            textAlign="right"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            xs={4}
          >
            <Typography
              sx={{
                marginBottom: "15px",
                marginRight: "22px",
              }}
            >
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
