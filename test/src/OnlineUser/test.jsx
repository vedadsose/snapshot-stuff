import React from "react";
import UserStatus from "./";
import renderer from "react-test-renderer";

describe("UserStatus", () => {
  describe("when user is online", () => {
    it("renders his status as online", () => {
      const tree = renderer.create(<UserStatus isOnline />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("when user is offline", () => {
    it("renders his last seen", () => {
      const tree = renderer
        .create(<UserStatus lastSeen="10 minutes ago" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
