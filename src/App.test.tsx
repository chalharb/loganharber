import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Given the App Component is rendered", () => {
    render(<App />);

    it("should contain 'Hello World'", () => {
        expect(screen.getByText(/Hello World/i)).toBeDefined()
    })
})