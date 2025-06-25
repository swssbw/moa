import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

import { PrevButton, NextButton, usePrevNextButtons } from './EmblaArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './EmblaSelectedSnapDisplay';
import './index.css';
import { Stack } from '@mui/material';

type PropType = {
  slides: React.JSX.Element[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <Stack
      direction='row'
      alignItems='center'
      gap={1}
    >
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <Stack>
        <section className='embla'>
          <div
            className='embla__viewport'
            ref={emblaRef}
          >
            <div className='embla__container'>
              {slides.map((slide, index) => (
                <div
                  className='embla__slide'
                  key={index}
                >
                  {/* {slide} */}
                  <div className='embla__slide__page'>{slide}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='embla__controls'>
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </Stack>
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </Stack>
  );
};

export default EmblaCarousel;
