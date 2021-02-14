import styled from 'styled-components';

export const SignUpContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;

    // header top
    .header-top {
        background: #fff;
        height: 6em;
        border-bottom: 1px solid #e6e6e6;
    }

    // header content
    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: var(--main-dark);
        margin-bottom: 6rem;
        width: 65%;
        height: calc(100vh - 6em);
        position: relative;
        margin: auto;
        margin-top: 0;
        text-align: center;
        align-content: center;
        flex-direction: column;
        z-index: 2;
    }

    //checkmark-logo
    .checkmark-logo {
        width: 3rem;
        margin-top: 3.125rem;
        margin-bottom: 2rem;
    }

    .header-content img {
        margin: 6.25rem auto 1.875rem;
    }

    // checked list
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 85%;
        font-size 17px;
        padding: auto;
    }

    // bullets
    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent; -1rem;
        line-height: 1.2rem;
    }

    .checked-list .bullet::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3em;
        width: 0.8em;
        content: '';
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }

    // sign in
    .signIn-btn {
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 700;
        line-height: normal;
        color: var(--main-dark);
        font-size: 1.25rem;
        right: 0;
        position: absolute; 
        cursor: pointer;
        &:hover {
            text-decoration: underline;

        }
    }
`;