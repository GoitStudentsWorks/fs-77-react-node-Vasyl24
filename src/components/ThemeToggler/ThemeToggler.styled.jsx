import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 28px;
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleInputChecked = styled.input`
  display: none; // Приховуємо інпут
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--btn-color);
  transition: background-color 0.4s;
  border-radius: 34px;

  &:before {
    content: '';
    position: absolute;
    height: 26px;
    width: 26px;
    bottom: 4px;
    background-color: var(--list-color);
    transition: transform 0.4s;
    border-radius: 50%;
    left: 4px;
  }

  ${ToggleInputChecked}:checked + & {
    background-color: var(--btn-color);
  }

  ${ToggleInputChecked}:checked + &:before {
    transform: translateX(26px);
  }
`;
