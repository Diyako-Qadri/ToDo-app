import { render, screen } from "@testing-library/react";
import SubTitle from "."

test("The Subtitle is rendered correctly", () => {
    const mockData:string = "Mock Subtitle Value"
    render(<SubTitle text={mockData}/>)

    const subTitleText = screen.getByRole("heading", {level: 3, name: mockData})

  expect(subTitleText).toBeInTheDocument() 
})