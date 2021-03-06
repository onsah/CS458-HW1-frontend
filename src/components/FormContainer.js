import styled from 'styled-components';

export const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 10;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 31.25rem; 
        padding: 1rem;

    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-tab: 1.2rem;
        
        
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }


    form div label {
        position: absolute;
        top: 100;
        left: 0.01rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~ label {
        top: 0.437rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }

    /* Check Box */
    .checkbox-container {
        position: relative;
        margin-left: 0.74rem;
        padding-left: 1.875rem;
        font-size: 0.9rem;
        cursor: pointer;
        color: #999;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;

    }

    checkbox-container input:checked + checkmark:after {
        content: ' ';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-botton: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    /* Bottom Form */

    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }

    .forgot-password{
        color: #828282;
        font-size: 0.9rem;
        margin-bottom: 4rem;
    }

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }

    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover{
            text-decoration: underline;
        }
    }

`;