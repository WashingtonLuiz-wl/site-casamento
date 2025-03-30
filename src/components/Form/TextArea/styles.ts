import styled from 'styled-components';

interface ITextAreaContainer {
  minHeight?: number;
}

export const TextAreaContainer = styled.div<ITextAreaContainer>`
  textarea {
    min-height: 100px !important;
    background-color: transparent;
    padding-top: 10px !important;
    overflow: hidden;
    height: 100px;

    resize: none;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 19px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
      border-radius: 19px;
    }
  }
`;
