# Axios 설정 완료

## ✅ 설정된 내용

### 🔧 API 서버 설정
- **API 서버**: `https://api.crypted-pay.com`
- **인증 토큰**: `f50fb695-1164-4a21-be16-42059ae3d6c6`
- **자동 헤더 설정**: 모든 요청에 `Authorization` 헤더 자동 추가

### 📁 파일 구조
```
src/
├── plugins/
│   ├── axios.ts          # Axios 플러그인 설정
│   └── index.ts          # 플러그인 등록
├── config/
│   └── api.ts            # API 기본 설정
└── types/
    └── axios.d.ts        # TypeScript 타입 정의
```

### 🚀 사용 방법

#### 1. Auto-import 사용 (권장)
```vue
<script setup lang="ts">
// axios는 자동으로 import됩니다
const response = await axios.get('/your-endpoint')
console.log(response.data)
</script>
```

#### 2. Global Property 사용
```vue
<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const response = await instance?.appContext.config.globalProperties.$http.get('/your-endpoint')
</script>
```

#### 3. Direct Import 사용
```vue
<script setup lang="ts">
import { axios } from '@/plugins/axios'

const response = await axios.get('/your-endpoint')
</script>
```

### ⚙️ 환경 변수 설정

`.env` 파일에서 쉽게 변경 가능:
```env
VITE_API_BASE_URL=https://api.crypted-pay.com
VITE_API_TOKEN=f50fb695-1164-4a21-be16-42059ae3d6c6
```

### 🔒 보안
- API 토큰은 `.env` 파일에 저장되어 Git에 커밋되지 않음
- 모든 요청에 자동으로 인증 헤더 추가
- 개발 환경에서만 에러 로깅

### 📝 예제 사용

```typescript
// GET 요청
const users = await axios.get('/users')

// POST 요청
const newUser = await axios.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
})

// PUT 요청
const updatedUser = await axios.put('/users/1', userData)

// DELETE 요청
await axios.delete('/users/1')
```

이제 `axios`를 사용하여 `https://api.crypted-pay.com`에 인증 토큰과 함께 API 요청을 할 수 있습니다!