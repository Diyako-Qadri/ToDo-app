import { fireEvent, render, screen} from "@testing-library/react"
import USPs from "."

describe("The USPs functions as instended", ()=>{

    test("there are 3 items under USPs", ()=> {
        render(<USPs/>)

        const USPsItems = screen.queryAllByRole("listitem")

        expect(USPsItems.length).toEqual(3)

        expect(USPsItems[1]).toHaveTextContent("Don't forget things")
    })

    test("The button hides the USPs", () =>{

        render(<USPs/>)

        let USPsItems = screen.queryAllByRole("listitem")

        expect(USPsItems.length).toEqual(3)

        const button = screen.getByRole("button")

        fireEvent.click(button)

        USPsItems = screen.queryAllByRole("listitem")
        expect(USPsItems).toEqual([])
    })


})