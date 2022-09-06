package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostPutDeleteAPI extends Simulation{

  // Protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api")

  // Scenario
  val scn1 = scenario("Create User")
    .exec(
      http("create new user")
        .post("/users")
        .header("content-type", "application/json")
        .asJson
        .body(RawFileBody("data/user.json")).asJson
//        .body(StringBody(
//          """
//            |{
//            |    "name": "John",
//            |    "job": "leader"
//            |}
//            |""".stripMargin)).asJson
        .check(
          status is 201,
          jsonPath("$.name") is ("Shubham")
        )
    )
    .pause(1)

  val scn2 = scenario("update user")
    .exec(
      http("update user")
        .put("/users/2")
        .header("content-type", "application/json")
        .asJson
        .body(RawFileBody("data/user.json")).asJson
        .check(
          status is 200,
          jsonPath("$.name") is ("Shubham")
        )
    )

  val scn3 = scenario("delete user")
    .exec(
      http("delete user")
        .delete("/users/2")
        .check(
          status is 204
        )
    )
    .pause(1)

  // setUp
  setUp(
    scn1.inject(rampUsers(5).during(5)),
    scn2.inject(rampUsers(3).during(5)),
    scn3.inject(rampUsers(2).during(5))
  ).protocols(httpProtocol)
}
