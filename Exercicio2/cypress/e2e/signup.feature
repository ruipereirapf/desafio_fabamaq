Feature: User Registration

    Background: Pre Conditions
        Given I navigate to the onlineStore homepage
        When I click on the sign up button
        And I validate that im on the sign up page

    @register_user
    Scenario: Register New User
        When I validate that all the signup fields are visible
        And I type the name on the name field
        And I type the email on the email field
        And I type the password on the password field
        And I click on the create account button
        Then I should be presented successful message
        And I should receive a confirmation email

    Scenario: User tries to register with existing email
        When I type the name on the name field
        And I type an already registered email on the email field
        And I type the password on the password field
        And I click on the create account button
        Then I should be presented with a error message "Email Already in Use."