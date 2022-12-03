///<reference types ="cypress"/>

describe("Check the login Functionality of Trip.com", () => {
  it("Check the login Functionality by valid credentials", () => {
    cy.visit("https://www.trip.com");
    cy.get(".mc-hd__login-btn").click();
    cy.get('[placeholder="Please enter an email address"]').type(
      "siddhantgadakh121@gmail.com"
    );
    cy.get("#ibu_login_submit > div").click();
    cy.wait(10000);
    cy.get(":nth-child(2) > .r_input > .one_txt_cut").type("Liveyourlife@1");

    cy.get(":nth-child(1) > .form_wrapper > #ibu_login_submit > div").click();
    cy.wait(10000);

    cy.get(".mc-hd__account-username").click();
    cy.get(".mc-hd__account-link").eq(3).click();
    cy.get("#givennameValue").should("contain.text", "Siddhant");

    // tc02 code

    cy.get("#header_action_nav_hotels").click();
    cy.get("#hotels-destinationV8").type("Mumbai");
    cy.get("#dropList").eq(0).click();
    cy.get("#checkIn").click();
    cy.get(".is-allow-hover>.day").contains("5").first().click();
    cy.get(".is-allow-hover>.day").contains("6").first().click();
    // cy.get('.u-icon u-icon-ic_new_dropdown_line icon-arrow').click()
    // cy.wait(1000)
    cy.get('[type="ic_bestir_plus"]').eq(1).click().wait(500).dblclick();
    cy.wait(1000);
    cy.get('[type="ic_bestir_plus"]').last().dblclick();
    cy.get(".done>.u-btn.u-btn-primary").click();
    cy.get("#keyword").clear().wait(500);

    cy.get(".searbtn-txt").click();
    cy.get("#preload-room-guest>span").first().contains("1 Room");
    cy.get("#preload-room-guest>span").eq(1).contains("4 Adults");
    cy.get("#preload-room-guest>span").last().contains(", 2 Children");
    cy.get(".room-guest > .u-icon").click();
    cy.get(".actions > .u-icon-ic_bestir_minus").eq(1).dblclick().click();
    cy.get(".done>.u-btn.u-btn-primary").click();
    cy.get("#keyword").clear();
    cy.wait(500);
    cy.get(".searbtn-txt").click();
    cy.get(".filter-title > h3").should("be.visible");
    cy.wait(10000).scrollTo("bottom");
    cy.wait(10000).scrollTo("bottom");
    cy.wait(15000).scrollTo("bottom");

    // cy.get('.list-card-title>span').eq(21).scrollIntoView().wait(3000).click()
    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url, target) => {
          return win.open.wrappedMethod.call(win, url, "_self");
        })
        .as("open");
      cy.get(".list-card-title>span")
        .eq(21)
        .scrollIntoView()
        .wait(3000)
        .click();
      cy.get("@open");
    });

    cy.get(".detail-headline-price-v8_select").click();
    cy.get('.book-box>div.book').first().click()

    cy.wait(1000)

    // cy.get('.btn > .u-btn > span').click()

    cy.wait(2000)
    cy.get('.date').contains("Mon, Dec 5")
    cy.get('.date').contains("Tue, Dec 6")
    cy.wait(1000).scrollTo("bottom")
    cy.get('.price').should("be.visible")


  });
});
