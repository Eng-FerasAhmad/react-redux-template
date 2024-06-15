import { ReactElement } from 'react';
import { AppContainer } from 'components/app/styles';
import { GlobalStyle } from 'style/global';

export default function App(): ReactElement {
    return (
        <AppContainer data-testid="app">
            <GlobalStyle />
            <div>React redux Template Created by Feras Ahmad</div>
            <p>
                Visit my webpage{' '}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.feras-ahmad.net"
                >
                    Feras-Ahmad
                </a>
            </p>
        </AppContainer>
    );
}
