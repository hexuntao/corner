'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

import Container from '@/common/components/elements/Container';

const Custom404: NextPage = () => {
  // 使用useEffect注入glitch动画样式
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 检查样式是否已存在
      if (!document.getElementById('glitch-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'glitch-styles';
        styleSheet.textContent = `
          .glitch {
            position: relative;
            animation: glitch 1s linear infinite;
          }

          @keyframes glitch {
            2%, 64% {
              transform: translate(2px, 0) skew(0deg);
            }
            4%, 60% {
              transform: translate(-2px, 0) skew(0deg);
            }
            62% {
              transform: translate(0, 0) skew(5deg);
            }
          }

          .glitch:before,
          .glitch:after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .glitch:before {
            animation: glitchTop 1s linear infinite;
            clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          }

          @keyframes glitchTop {
            2%, 64% {
              transform: translate(2px, -2px);
            }
            4%, 60% {
              transform: translate(-2px, 2px);
            }
            62% {
              transform: translate(13px, -1px) skew(-13deg);
            }
          }

          .glitch:after {
            animation: glitchBottom 1.5s linear infinite;
            clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
            -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          }

          @keyframes glitchBottom {
            2%, 64% {
              transform: translate(-2px, 0);
            }
            4%, 60% {
              transform: translate(-2px, 0);
            }
            62% {
              transform: translate(-22px, 5px) skew(21deg);
            }
          }
        `;
        document.head.appendChild(styleSheet);
      }
    }
  }, []);

  return (
    <Container
      className='flex h-full flex-col items-center justify-center space-y-5 py-40 md:py-20'
      data-aos='fade-up'
    >
      <h1 className='glitch text-7xl font-bold' data-text='404'>
        404
      </h1>
      <h2 className='animate-pulse text-center text-xl lg:text-xl'>
        哎呀&apos;这里好像什么都没有!
      </h2>
    </Container>
  );
};

export default Custom404;
