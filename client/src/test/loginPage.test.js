import React from "react";
import Note from "../Components/Note"
import renderer from "react-test-renderer";


test("renders correctly without error",() => {
    const tree = renderer.create(<Note/>).toJSON();
    expect(tree).toMatchSnapshot();
})
