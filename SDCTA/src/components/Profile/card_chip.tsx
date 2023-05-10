import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

interface CardProps {
  name: string;
  cardNumber: string;
  type: string;
  date: string;
  isMain: boolean;
  delete: () => void;
}

const CardTypes = new Map<string, string>([
  ["MasterCard", "./cards/MasterCard.png"],
  ["Discover", "./cards/Discover.png"],
  ["Visa", "./cards/Visa.jpeg"],
  ["American Express", "./cards/AmericanExpress.png"],
]);

export const CardChip: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#EBEBEB",
          boxShadow: "none",
          minWidth: "300px",
          maxWidth: "400px",
          margin: "10px",
          borderRadius: "16px",
          alignItems: "center",
          border: props.isMain ? "2px solid #B43721" : "",
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
            {!props.isMain && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick={props.delete}
                sx={{
                  marginTop: "5px",
                  marginRight: "20px",
                  marginBottom: "0px",
                }}
              >
                <DeleteIcon color="error" onClick={props.delete} />
              </IconButton>
            )}
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
