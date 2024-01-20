import styled, { createGlobalStyle, DefaultTheme } from "styled-components";
import { Theme } from "../themes/Themes";

export const GlobalStyle = createGlobalStyle<{
  theme: DefaultTheme & Theme;
  isCorrect: boolean | null;
}>`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: 500;
    background-image: url(${({ theme }) => theme.backgroundimg.main});
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.color.main};
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  img {
    background-color: #f4f6fa;
    border-radius: 7px;
  }

  li {
    display: flex;
    width: auto;
    align-items: center;
    gap: 3vh;
    cursor: pointer;
    padding: 2vh;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.background.optionsdiv};
    color: ${({ theme }) => theme.color.main};
    border: none;

    &:active,
    &:hover {
      outline: 2px solid #a729f5;
    }
  }

  li.correct {
    position: relative;
    outline: 2px solid ${({ theme }) => theme.border.correctEffect};

    ${({ isCorrect, theme }) =>
      isCorrect !== null &&
      isCorrect &&
      `
        span {
          background-color: ${theme.background.correctEffect};
          color: white;
        }

        picture {
          z-index: 5;
          position: absolute;
          left: 90%;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url(${theme.backgroundimg.correctEffect});
        }
      `}
  }

  li.wrong {
    position: relative;
    outline: 2px solid ${({ theme }) => theme.border.wrongEffect};

    ${({ isCorrect, theme }) =>
      isCorrect !== null &&
      !isCorrect &&
      `
        span {
          color: white;
          background-color: ${theme.background.wrongEffect};
        }

        picture {
          left: 90%;
          z-index: 5;
          position: absolute;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url(${theme.backgroundimg.wrongEffect});
        }
      `}
  }

  .correct span {
    background-color: ${({ theme }) => theme.background.correctEffect};
    color: white;
  }

  li.correct picture {
    z-index: 5;
    position: absolute;
    left: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ theme }) => theme.backgroundimg.correctEffect});
  }

  li.wrong picture {
    left: 90%;
    z-index: 5;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ theme }) => theme.backgroundimg.wrongEffect});
  }

  .wrong span {
    color: white;
    background-color: ${({ theme }) => theme.background.wrongEffect};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    color: #313e51;
    background-color: #f4f6fa;
    width: 45px;
    height: 45px;
  }

  li:hover .alphabet {
    color: ${({ theme }) => theme.color.spanHover};
    background-color: ${({ theme }) => theme.background.spanHover};
  }

  li:hover .correct .alphabet {
    color: white;
    background-color: ${({ theme }) => theme.background.correctEffect};
  }

  li:hover .wrong .alphabet {
    color: white;
    background-color: ${({ theme }) => theme.background.wrongEffect};
  }

  Button {
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    border: none;
    width: auto;
    font-size: 28px;
    padding: 2vh;
    transition: all ease-in-out 0.3s;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.background.Buttons};
    color: ${({ theme }) => theme.color.Buttons};
  }

  Button:hover {
    opacity: 0.6;
  }

  ul .bottomWrong p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.wongColor};
  }

  ul .bottomWrong picture {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ theme }) => theme.backgroundimg.wrongEffect});

    @media screen and (max-width: 900px) {
      left: 20%;
    }
  }

  .darkModeContainer {
    display: flex;
    margin: 5vh 7%;
    align-items: center;
    justify-content: space-between;
  }

  .darkModeContainer .toglleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toglleContainer .sunImage {
    padding-left: 50px;
    background-repeat: no-repeat;
    background-image: url(${({ theme }) => theme.backgroundimg.sunimgcolor});
  }

  .toglleContainer .moonImage {
    margin-left: 25px;
    padding-bottom: 6px;
    padding-left: 20px;
    background-repeat: no-repeat;
    background-image: url(${({ theme }) => theme.backgroundimg.moonimgcolor});
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #a729f5;
    transition: background-color 0.4s, box-shadow 0.4s;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: transform 0.4s;
  }

  input:checked + .slider {
    background-color: #a729f5;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const StyledApp = styled.div``;

export const Accesibilty = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ... Uncomment and adjust the rest of the styles as needed
