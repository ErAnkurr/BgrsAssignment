import { render, screen } from '@testing-library/react'
import userEvents from '@testing-library/user-event'
import Character from './Character'

describe ('Character component', () => {
    test('renders without crashing', () => {
        render(<Character />)
    } )
})