import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("Calculator", () => {

    test("deve renderizar uma operação", async () => {

        render(<Calculator />)

        const buttonMais = screen.getByRole('button', { name: /\+/i })
        const buttonMenos = screen.getByRole('button', { name: /\-/i })
        const buttonMult = screen.getByRole('button', { name: /\*/i })
        const buttonDiv = screen.getByRole('button', { name: /\//i })

        expect(buttonMais).toBeInTheDocument()
        expect(buttonMenos).toBeInTheDocument()
        expect(buttonMult).toBeInTheDocument()
        expect(buttonDiv).toBeInTheDocument()
    })

    test("deve multiplicar os valores clicados", async () => {

        const user = userEvent.setup()

        render(<Calculator />)

        const button5 = screen.getByRole('button', { name: /5/i })
        const button2 = screen.getByRole('button', { name: /2/i })
        const buttonMult = screen.getByRole('button', { name: /\*/i })
        const buttonIgual = screen.getByRole('button', { name: /=/i })

        screen.logTestingPlaygroundURL()

        const item = screen.getByTestId("result")

        await user.click(button5)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonIgual)
        
        expect(item).toHaveTextContent("10")
    })

    test("deve multiplicar e somar os valores clicados", async () => {

        const user = userEvent.setup()

        render(<Calculator />)

        const button5 = screen.getByRole('button', { name: /5/i })
        const button2 = screen.getByRole('button', { name: /2/i })
        const button9 = screen.getByRole('button', { name: /9/i })
        const buttonMais = screen.getByRole('button', { name: /\+/i })
        const buttonMult = screen.getByRole('button', { name: /\*/i })
        const buttonIgual = screen.getByRole('button', { name: /=/i })

        const item = screen.getByTestId("result")

        await user.click(button5)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonMais)
        await user.click(button9)
        await user.click(buttonIgual)

        expect(item).toHaveTextContent("19")
    })
})