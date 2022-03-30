import { useState } from 'react';

export const CrudUsersHandlers = () => {
  const [isCreatorVisible, setIsCreatorVisible] = useState(false);
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [isLectorVisible, setIsLectorVisible] = useState(false);

  const showEditor = () => {
    setIsEditorVisible(true);
  };

  const handleOkOfEditor = () => {
    setIsEditorVisible(false);
  };

  const handleCancelOfEditor = () => {
    setIsEditorVisible(false);
  };

  const showCreator = () => {
    setIsCreatorVisible(true);
  };

  const handleOkOfCreator = () => {
    setIsCreatorVisible(false);
  };

  const handleCancelOfCreator = () => {
    setIsCreatorVisible(false);
  };

  const showLector = () => {
    setIsLectorVisible(true);
  };

  const handleOkOfLector = () => {
    setIsLectorVisible(false);
  };

  const handleCancelOfLector = () => {
    setIsLectorVisible(false);
  };

  return {
    isCreatorVisible,
    isEditorVisible,
    isLectorVisible,
    showEditor,
    handleOkOfEditor,
    handleCancelOfEditor,
    showCreator,
    handleOkOfCreator,
    handleCancelOfCreator,
    showLector,
    handleOkOfLector,
    handleCancelOfLector,
  };
};
