import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const splashScreens = [
  { width: 2048, height: 2732 }, // iPad Pro
  { width: 1668, height: 2388 }, // iPad Air
  { width: 1536, height: 2048 }, // iPad
];

const inputFile = './src/components/logo.svg';
const outputDir = './public/splash';

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateSplashScreens() {
  try {
    for (const screen of splashScreens) {
      // 로고 크기 계산 (화면 크기의 25%)
      const logoSize = Math.min(screen.width, screen.height) * 0.25;

      // 흰색 배경 생성
      const background = sharp({
        create: {
          width: screen.width,
          height: screen.height,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      });

      // 로고 리사이즈
      const logo = sharp(inputFile).resize(Math.round(logoSize), Math.round(logoSize), {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      });

      // 로고를 중앙에 배치
      const composite = await background.composite([
        {
          input: await logo.toBuffer(),
          top: Math.round((screen.height - logoSize) / 2),
          left: Math.round((screen.width - logoSize) / 2),
        },
      ]);

      // 파일 저장
      await composite.png().toFile(path.join(outputDir, `apple-splash-${screen.width}-${screen.height}.png`));

      console.log(`Generated ${screen.width}x${screen.height} splash screen`);
    }

    console.log('All splash screens generated successfully!');
  } catch (error) {
    console.error('Error generating splash screens:', error);
  }
}

generateSplashScreens();
