const globalCss = `
    body {
      font-family: 'Roboto';
    }

    .cardWidget {
    
        &-enter&-enter {
            opacity: 0.1;
            transition: opacity 1s ease-out;
        }

        &-enter&-enter-active {
           opacity: 1;
        }

        &-exit&-exit {
            background: blue;
        }

        &-exit&-exit-active {
            background: yellow;
        }
    }
`;

export default globalCss;