import { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { lock, unlock } from 'tua-body-scroll-lock';
import Avatar from 'react-avatar-edit';

import icons from '../../assets/sprite.svg';
import {
  ModalStyles,
  BackdropStyles,
  Container,
  CloseButton,
  Icon,
  UserAvatar,
  StyledForm,
  StyledField,
  StyledBtn,
  AvatarWrap,
  AddButton,
  IconEdit,
  AvatarPreviewWrap,
} from './UserInfoModal.styled';
import { yupSchema } from './yupSchema';
import { selectUser } from '../../redux/selectors';
import { updateUser } from '../../redux/auth/authOperations';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export const UserInfoModal = ({ toggleModal, modalIsOpen }) => {
  const dispatch = useDispatch();
  const { name, avatarURL } = useSelector(selectUser);
  const [modalSize, setModalSize] = useState([335, 345]);
  const [previewIsShown, setPreviewIsShown] = useState(false);
  const [preview, setPreview] = useState(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth >= 768) setModalSize([500, 426]);
    else if (windowWidth < 768) setModalSize([335, 345]);
  }, [windowWidth]);

  const initialValues = { name: name };
  const handleClose = () => {
    toggleModal();
    unlock();
  };

  const handleAddFile = () => {
    const hiddenFileInput = document.querySelector(
      'input[name^=avatar_loader]'
    );
    hiddenFileInput.click();
    const avatarPreview = document.querySelector('#avatar-show');
    avatarPreview.style.display = 'flex';
    setPreviewIsShown(true);
  };

  const handleSubmit = values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('avatar', preview);
    console.log(formData.entries());
    dispatch(updateUser(formData));
    toggleModal();
  };

  const onClose = () => {
    const avatarPreview = document.querySelector('#avatar-show');
    setPreview(null);
    avatarPreview.style.display = 'none';
    setPreviewIsShown(false);
  };
  const onCrop = pv => {
    setPreview(pv);
  };
  const onBeforeFileLoad = elem => {
    if (elem.target.files[0].size > 5000000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  return (
    <>
      <Rodal
        width={modalSize[0]}
        height={modalSize[1]}
        visible={modalIsOpen}
        onClose={handleClose}
        closeOnEsc={true}
        animation={'zoom'}
        showCloseButton={false}
        customStyles={ModalStyles}
        customMaskStyles={BackdropStyles}
        onAnimationEnd={lock()}
      >
        <Container>
          <CloseButton type="button" onClick={handleClose}>
            <Icon>
              <use xlinkHref={`${icons}#icon-close`} />
            </Icon>
          </CloseButton>
          {!previewIsShown && (
            <AvatarWrap>
              <UserAvatar src={avatarURL} alt="User photo" />
              <AddButton type="button" onClick={handleAddFile}>
                <Icon>
                  <use xlinkHref={`${icons}#icon-add-photo`} />
                </Icon>
              </AddButton>
            </AvatarWrap>
          )}
          <AvatarPreviewWrap id="avatar-show" style={{ display: 'none' }}>
            <Avatar
              width={100}
              height={100}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={null}
              label=""
            />
            {preview && (
              <>
                <img src={preview} alt="Preview" />
                {/* <a href={preview} download="avatar">
                Download image
              </a> */}
              </>
            )}
          </AvatarPreviewWrap>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={yupSchema}
          >
            <StyledForm>
              <StyledField type="text" name="name" id="name" />
              <ErrorMessage name="name" />

              <IconEdit>
                <use xlinkHref={`${icons}#icon-edit`} />
              </IconEdit>

              <StyledBtn type="submit">Save changes</StyledBtn>
            </StyledForm>
          </Formik>
        </Container>
      </Rodal>
    </>
  );
};
