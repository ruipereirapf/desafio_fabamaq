Feature: User Registration and Login

    Background: Pre Conditions
        Given I navigate to the onlineStore homepage

    @register_user
    Scenario: Register New User
        When I click on the sign up button
        And I validate that im on the sign up page
        And I type the name on the name field
        And I type the email on the email field
        And I type the password on the password field
        And I click on the create account button
        Then I should be presented successful message
        And I should receive a confirmation email

    
    Scenario: User tries to register with existing email
        When I click on the sign up button
        And I validate that im on the sign up page
        And I type the name on the name field
        And I type an already registered email on the email field
        And I type the password on the password field
        And I click on the create account button
        Then I should be presented with a error message

    # @login_user
    # Scenario: Login user
    #     When I click on the login button
    #     And I type the email on the name field
    #     And I type the password on the password field
    #     Then I should be presented with a successful login message