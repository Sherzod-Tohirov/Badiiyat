import './draginputgroup.css';
import plus from '../../assets/images/plus.svg';
import plusDark from '../../assets/images/plusdark.svg';
import { forwardRef, useCallback, useContext, useRef, useState } from 'react';
import { themeContext } from '../../context/themeContext';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { ErrorSpan } from '../ErrorSpan';
export const DragInputGroup = forwardRef(({children, file, setFile, preview, setPreview, error, ...props}, ref) => {
  console.log(error);
  const {theme} = useContext(themeContext);
  const {t} = useTranslation();
  const onDrop = useCallback(acceptedFiles => {
      setFile(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]))
    }, [setFile, setPreview]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: "image/*"});
  return (
    <div {...getRootProps()}  className='flex items-center justify-center'>
        <label className={`drag-label flex-shrink-0 ${isDragActive ? 'drag-active' : ''}`} htmlFor="drag-input">
            <img src={theme === 'light' ? plus : plusDark} alt="Plus icon" />
            <span className='drag-element'>{t("input.drag.title")}</span>
            {
              file && <img className='drag-preview' src={preview} alt="Image" />
            }
            {
              error && <ErrorSpan style={'text-center'}>{t("input.file.validation.required")}</ErrorSpan>
            }
        </label>
        <input {...getInputProps()}  id='drag-input' className='hidden drag-input' type="file" accept='image/*' ref={ref} />
    </div>
  )
})


DragInputGroup.displayName = 'DragInputGroup';