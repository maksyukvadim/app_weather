const globalCss = `
    body {
      font-family: 'Roboto';
    }

    .cardWidget {
    
        &-enter&-enter {
            opacity: 0;
            transition: opacity .5s ease-out;
            transition-delay:200ms;
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