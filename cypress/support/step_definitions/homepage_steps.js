/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage_PO from "../page_objects/homepage_PO";

const homepage_page = new homepage_PO();
const url = "http://www.onlinestore.com/"

Given(`I navigate to the onlineStore homepage`, () =>{
    cy.visit(url);
})

When (`I click on the sign up button`, () => {
    homepage_page.click_signup_button();
})