import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

function Card({ name, url, tel, addr }) {
  const handleClick = () => {
    location.href = 'tel:' + tel;
  };
  return
}