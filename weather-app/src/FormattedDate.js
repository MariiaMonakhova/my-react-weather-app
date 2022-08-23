import React from "react";
import axios from "axios";

export default function FormattedDate(props) {
  console.log(props.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednedday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}
