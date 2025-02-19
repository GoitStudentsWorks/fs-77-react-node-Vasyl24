import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import welcomesm2x from '../../assets/welcome-mob@2x.jpg';
import welcomesm1x from '../../assets/welcome-mob.jpg';
import welcomemd1x from '../../assets/welcome-tabl.jpg';
import welcomemd2x from '../../assets/welcome-tabl@2x.jpg';
import welcome1x from '../../assets/welcome-desk.jpg';
import welcome2x from '../../assets/welcome-desk@2x.jpg';

export const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background-position: right;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(6, 6, 9, 1),
      rgba(10, 10, 17, 0)
    ),
    url(${welcomemd1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcomemd2x});
    justify-content: left;
  }

  @media (max-width: 767.98px) {
    justify-content: left;
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcomesm1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(6, 6, 9, 1),
          rgba(10, 10, 17, 0)
        ),
        url(${welcomesm2x});
    }
  }

  @media (min-width: 1024px) {
    justify-content: left;
    background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcome1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(6, 6, 9, 1),
          rgba(10, 10, 17, 0)
        ),
        url(${welcome2x});
    }
  }
`;

export const RegisterContainer = styled.form`
  width: 335px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 1000;

  @media (min-width: 768px) {
    width: 400px;
    margin-left: 64px;
  }

  @media (min-width: 1024px) {
    margin-left: 100px;
  }
`;

export const Title = styled.h1`
  color: var(--text-btn-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 335px;
  height: 54px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  padding-left: 24px;
  margin-bottom: 14px;
  color: var(--text-btn-color);

  &::placeholder {
    color: var(--text-btn-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    font-size: 17px;
    line-height: 1.5;

    &::placeholder {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 22px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: var(--text-btn-color);
    border-color: rgba(243, 243, 243, 0.5);
  }
`;

export const StyledIconСalendar = styled.div`
  position: absolute;
  top: 100px;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
`;

export const IconСalendar = styled.svg`
  width: 24px;
  height: 24px;
`;

export const InputBlock = styled.div`
  position: relative;
  margin-top: 28px;
  margin-bottom: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 200px;
  border: ${props => props.border || '1px solid rgba(243, 243, 243, 0.2)'};
  background-color: transparent;
  padding-left: 24px;
  margin-bottom: 14px;
  color: var(--text-btn-color);

  &::placeholder {
    color: var(--text-btn-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 1.5;

    &::placeholder {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 22px;
  }

  &:focus,
  &:hover {
    border-color: rgba(243, 243, 243, 0.5);
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1px;
  position: relative;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: -10px;
  transform: translateY(-50%);

  color: var(--error-state-color);
  font-size: 12px;
`;

export const ValidContainer = styled.div`
  margin-top: 1px;
  position: relative;
`;

export const ValidMessage = styled.div`
  position: absolute;
  top: -10px;
  transform: translateY(-50%);

  color: var(--correct-state-color);
  font-size: 12px;
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 54px;

  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: var(--text-btn-color);

  color: var(--accent-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

  &focus,
  &:hover {
    background: var(--hover-btn-color);
    color: var(--text-btn-color);
  }

  &:disabled {
    pointer-events: none;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration-line: underline;
  padding-top: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const IconPasswordHidden = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 238px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const IconPasswordShow = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 238px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const IconDone = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 168px;
  transform: translateY(-50%);
`;

export const IconError = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 20px;
  top: 168px;
  transform: translateY(-50%);
`;
