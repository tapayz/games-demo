# Production 배포 가이드

## ✅ 구성된 환경

### 📁 환경 파일
```
.env                 # 개발 환경 (https://api.crypted-pay.com)
.env.production     # 프로덕션 환경 (/cryptpay - 프록시 사용)
.env.example        # 예제 파일
```

### 🔧 API 설정
- **개발**: `https://api.crypted-pay.com` (직접 호출)
- **프로덕션**: `/cryptpay` (서버 프록시 사용)
- **인증 토큰**: `f50fb695-1164-4a21-be16-42059ae3d6c6` (양쪽 동일)

## 🚀 배포 명령어

### 기본 배포
```bash
# 프로덕션 빌드 + PM2 시작
yarn deploy
```

### PM2 관리 명령어
```bash
# 서비스 중지
yarn deploy:stop

# 서비스 재시작
yarn deploy:restart

# 무중단 재배포 (권장)
yarn deploy:reload

# 서비스 완전 삭제
yarn deploy:delete
```

### 수동 배포
```bash
# 1. 프로덕션 빌드
yarn build:prod

# 2. PM2로 시작
pm2 start ecosystem.config.js
```

## 📋 PM2 설정 (ecosystem.config.js)
```javascript
{
  name: 'tapayz-games-demo',
  port: 4000,
  instances: 1,
  spa: true,
  logs: './logs/',
  max_memory_restart: '1G'
}
```

## 🔍 배포 확인
```bash
# PM2 상태 확인
pm2 status

# 로그 확인
pm2 logs tapayz-games-demo

# 실시간 모니터링
pm2 monit
```

## 📝 배포 프로세스
1. **빌드**: `.env.production` 설정으로 Vite 빌드
2. **시작**: PM2가 `dist` 폴더를 4000포트에서 서빙
3. **API**: `/cryptpay/*` 요청이 프록시를 통해 백엔드로 전달됨
4. **로깅**: `./logs/` 폴더에 PM2 로그 저장

## 🛡️ 보안 고려사항
- API 토큰은 환경변수로 관리
- 프로덕션에서는 프록시 사용으로 CORS 이슈 해결
- PM2 로그는 Git에서 제외

## 🔄 무중단 배포
```bash
# 권장: 무중단 리로드
yarn deploy:reload

# 또는 수동으로
pm2 reload tapayz-games-demo
```

이제 `yarn deploy` 명령어 하나로 프로덕션 배포가 완료됩니다!