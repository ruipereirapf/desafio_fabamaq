Feature: User Login

    @login_user
    Scenario: Login user
        Given I navigate to the onlineStore homepage
        When I click on the login button
        And I type the email to login
        And I type the password to login
        And I click on the confirm login button
        Then I should be presented with a successful login message

    @login_invalid_email
    Scenario: Login with invalid email
        Given I navigate to the onlineStore homepage
        When I click on the login button
        And I type the invalid email to login
        And I type the password to login
        And I click on the confirm login button
        Then I should be presented with a already existent email error message
