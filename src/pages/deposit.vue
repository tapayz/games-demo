<template>
  <v-container id="deposit" class="px-0" tag="section">
    <!-- Hero Section with Crypto Background -->
    <div class="crypto-hero-section">
      <v-container class="py-16">
        <v-row justify="center" align="center" class="text-center">
          <v-col cols="12" md="8">
            <v-fade-transition appear>
              <div>
                <v-icon icon="mdi-bitcoin" size="80" class="crypto-hero-icon mb-4" color="accent" />
                <h1 class="text-h2 font-weight-bold text-white mb-4 crypto-title">
                  Crypto Deposit
                </h1>
                <p class="text-h6 text-grey-lighten-1 mb-8">
                  Start secure and fast digital asset trading
                </p>
                <div class="crypto-stats d-flex justify-center flex-wrap gap-4">
                  <v-chip
                    color="accent"
                    variant="tonal"
                    size="large"
                    prepend-icon="mdi-shield-check"
                    class="premium-chip"
                  >
                    100% Secure
                  </v-chip>
                  <v-chip
                    color="primary"
                    variant="tonal"
                    size="large"
                    prepend-icon="mdi-lightning-bolt"
                    class="premium-chip"
                  >
                    Instant Processing
                  </v-chip>
                  <v-chip
                    color="secondary"
                    variant="tonal"
                    size="large"
                    prepend-icon="mdi-chart-line"
                    class="premium-chip"
                  >
                    Real-time Pricing
                  </v-chip>
                </div>
              </div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Form Section -->
    <v-responsive class="overflow-visible" min-height="70vh">
      <v-row align="center" justify="center" class="fill-height mx-0 mt-n16">
        <v-col cols="12" md="10" lg="8">
          <v-slide-y-transition appear>
            <Card class="deposit-form-card pa-8" elevation="32">
              <!-- Form Header -->
              <div class="text-center mb-8">
                <div class="d-flex justify-center align-center mb-4">
                  <v-avatar size="48" color="primary" class="mr-3">
                    <v-icon icon="mdi-wallet" size="28" color="white" />
                  </v-avatar>
                  <h2 class="text-h4 font-weight-bold luxury-title">Digital Asset Deposit</h2>
                </div>
                <p class="text-body-1 text-grey-darken-1 luxury-subtitle">
                  Enter the information below to issue an invoice
                </p>
              </div>

              <v-form @submit.prevent="submitInvoice">
                <!-- Customer Information Section -->
                <div class="form-section mb-6">
                  <h3 class="text-h6 font-weight-medium mb-4 d-flex align-center section-title">
                    <v-icon icon="mdi-account" class="mr-2" color="primary" />
                    Customer Information
                  </h3>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.customerId"
                        label="Customer ID"
                        type="number"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-identifier"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.customerName"
                        label="Customer Name"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-account-outline"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                  </v-row>
                </div>

                <!-- Transaction Details Section -->
                <div class="form-section mb-6">
                  <h3 class="text-h6 font-weight-medium mb-4 d-flex align-center section-title">
                    <v-icon icon="mdi-swap-horizontal" class="mr-2" color="primary" />
                    Transaction Details
                  </h3>
                  <v-text-field
                    v-model="form.title"
                    label="Transaction Title"
                    variant="outlined"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-text"
                    color="primary"
                    class="mb-4 modern-field"
                    required
                  />

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.priceAtRequest"
                        label="Price at Request"
                        type="number"
                        step="0.01"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-currency-usd"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.cashAmount"
                        label="Cash Amount (KRW)"
                        type="number"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-cash"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                  </v-row>
                </div>

                <!-- Asset Configuration Section -->
                <div class="form-section mb-8">
                  <h3 class="text-h6 font-weight-medium mb-4 d-flex align-center section-title">
                    <v-icon icon="mdi-bitcoin" class="mr-2" color="accent" />
                    Asset Configuration
                  </h3>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.fiatAssetId"
                        label="Fiat Asset ID"
                        type="number"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-bank"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.cryptoAssetId"
                        label="Crypto Asset ID"
                        type="number"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-ethereum"
                        color="accent"
                        required
                        class="modern-field"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.expiredSecond"
                        label="Expiry Time (seconds)"
                        type="number"
                        variant="outlined"
                        :rules="[rules.required]"
                        prepend-inner-icon="mdi-timer"
                        color="primary"
                        required
                        class="modern-field"
                      />
                    </v-col>
                  </v-row>
                </div>

                <!-- Submit Button -->
                <div class="text-center mb-16">
                  <v-btn
                    type="submit"
                    :loading="loading"
                    :disabled="loading"
                    color="primary"
                    size="x-large"
                    elevation="8"
                    class="crypto-submit-btn px-10 py-1"
                    rounded="lg"
                  >
                    <v-icon icon="mdi-send" class="mr-2" />
                    <span class="text-h6 font-weight-bold">Issue Invoice</span>
                  </v-btn>
                </div>
              </v-form>

              <!-- Response Display -->
              <v-expand-transition>
                <div v-if="response" class="mt-12">
                  <v-card color="success" variant="tonal" class="pa-6" rounded="lg">
                    <div class="d-flex align-center mb-4">
                      <v-icon icon="mdi-check-circle" size="32" color="success" class="mr-3" />
                      <h3 class="text-h5 font-weight-bold">Response Result</h3>
                    </div>
                    <v-card color="surface" variant="outlined" class="pa-4" rounded="lg">
                      <v-code tag="pre" class="response-code">{{ formattedResponse }}</v-code>
                    </v-card>
                  </v-card>
                </div>
              </v-expand-transition>

              <!-- Error Display -->
              <v-expand-transition>
                <v-alert
                  v-if="error"
                  type="error"
                  variant="tonal"
                  class="mt-8 mb-16"
                  closable
                  rounded="lg"
                  @click:close="error = null"
                >
                  <template #prepend>
                    <v-icon icon="mdi-alert-circle" />
                  </template>
                  <div class="font-weight-bold">Error Occurred</div>
                  <div>{{ error }}</div>
                </v-alert>
              </v-expand-transition>
            </Card>
          </v-slide-y-transition>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { axios } from "@/plugins/axios";

// Form data interface
interface InvoiceForm {
  customerId: number | null;
  customerName: string;
  title: string;
  priceAtRequest: number | null;
  fiatAssetId: number | null;
  cryptoAssetId: number | null;
  cashAmount: number | null;
  expiredSecond: number | null;
}

// Form validation rules
const rules = {
  required: (value: any) => !!value || "This field is required.",
};

// Reactive form data
const form = ref<InvoiceForm>({
  customerId: 21,
  customerName: "Tapayz Premium",
  title: "USDT 100,000 KRW Purchase",
  priceAtRequest: 1350.5,
  fiatAssetId: 1,
  cryptoAssetId: 1001,
  cashAmount: 100000,
  expiredSecond: 300,
});

// State management
const loading = ref(false);
const response = ref<any>(null);
const error = ref<string | null>(null);

// Computed formatted response
const formattedResponse = computed(() => {
  return response.value ? JSON.stringify(response.value, null, 2) : "";
});

// Submit invoice function
const submitInvoice = async () => {
  loading.value = true;
  error.value = null;
  response.value = null;

  try {
    const result = await axios.post("/invoice/issue", {
      customerId: Number(form.value.customerId),
      customerName: form.value.customerName,
      title: form.value.title,
      priceAtRequest: Number(form.value.priceAtRequest),
      fiatAssetId: Number(form.value.fiatAssetId),
      cryptoAssetId: Number(form.value.cryptoAssetId),
      cashAmount: Number(form.value.cashAmount),
      expiredSecond: Number(form.value.expiredSecond),
    });

    response.value = result.data;
  } catch (err: any) {
    error.value = err.response?.data?.message || err.message || "An unknown error occurred.";
    console.error("Invoice API Error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
#deposit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 120px; // Footer와의 충분한 간격 확보

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(79, 238, 186, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(63, 81, 181, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(159, 168, 218, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.crypto-hero-section {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234FEEBA' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3Ccircle cx='23' cy='37' r='2'/%3E%3Ccircle cx='37' cy='23' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: float 20s ease-in-out infinite;
  }
}

.crypto-hero-icon {
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(79, 238, 186, 0.3));
}

.crypto-title {
  background: linear-gradient(45deg, #4feeba, #3f51b5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(79, 238, 186, 0.2);
}

.crypto-stats {
  .v-chip {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
}

.premium-chip {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(79, 238, 186, 0.3);

    &::before {
      left: 100%;
    }
  }
}

.deposit-form-card {
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px !important;
  box-shadow:
    0 48px 100px rgba(0, 0, 0, 0.12),
    0 24px 50px rgba(0, 0, 0, 0.08),
    0 12px 25px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.15) !important;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 64px 128px rgba(0, 0, 0, 0.15),
      0 32px 64px rgba(0, 0, 0, 0.1),
      0 16px 32px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(255, 255, 255, 0.2) !important;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, #3f51b5, #4feeba, #9fa8da, #5c6bc0);
    border-radius: 32px 32px 0 0;
    background-size: 300% 300%;
    animation: gradient-shift 4s ease infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    opacity: 0.8;
  }
}

.luxury-title {
  background: linear-gradient(135deg, #1a1a2e, #3f51b5, #4feeba);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3f51b5, #4feeba);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(79, 238, 186, 0.3);
  }
}

.luxury-subtitle {
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.85;
}

.form-section {
  position: relative;
  padding: 24px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -32px;
    right: -32px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(63, 81, 181, 0.1), transparent);
  }

  &:first-child::before {
    display: none;
  }
}

.section-title {
  position: relative;
  z-index: 1;
  font-weight: 500 !important;
  letter-spacing: 0.5px;
  color: #1a1a2e !important;
  margin-bottom: 20px !important;

  .v-icon {
    background: linear-gradient(135deg, #3f51b5, #4feeba);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 4px rgba(79, 238, 186, 0.2));
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 32px;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #3f51b5, #4feeba);
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(79, 238, 186, 0.25);
  }
}

.modern-field {
  margin-bottom: 20px;

  .v-field {
    border-radius: 20px !important;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95));
    border: 2px solid rgba(63, 81, 181, 0.08) !important;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(79, 238, 186, 0.02), rgba(63, 81, 181, 0.02));
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    &:hover {
      border-color: rgba(63, 81, 181, 0.25) !important;
      transform: translateY(-2px) scale(1.01);
      box-shadow:
        0 8px 25px rgba(63, 81, 181, 0.1),
        0 4px 12px rgba(79, 238, 186, 0.08);

      &::before {
        opacity: 1;
      }
    }

    &.v-field--focused {
      border-color: rgba(63, 81, 181, 0.6) !important;
      box-shadow:
        0 0 0 3px rgba(63, 81, 181, 0.12),
        0 12px 35px rgba(63, 81, 181, 0.15),
        0 6px 18px rgba(79, 238, 186, 0.1);
      transform: translateY(-3px) scale(1.02);

      &::before {
        opacity: 1;
      }
    }
  }

  .v-field__prepend-inner {
    .v-icon {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
  }

  .v-label {
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
  }

  &:hover .v-field__prepend-inner .v-icon {
    color: #3f51b5 !important;
    transform: scale(1.1) rotate(5deg);
  }

  &:focus-within .v-field__prepend-inner .v-icon {
    color: #4feeba !important;
    transform: scale(1.15) rotate(-5deg);
  }
}

.crypto-submit-btn {
  background: linear-gradient(135deg, #3f51b5 0%, #4feeba 50%, #5c6bc0 100%) !important;
  border-radius: 24px !important;
  text-transform: none !important;
  letter-spacing: 0.8px;
  font-weight: 600 !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(63, 81, 181, 0.25),
    0 4px 16px rgba(79, 238, 186, 0.15);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 16px 48px rgba(63, 81, 181, 0.35),
      0 8px 24px rgba(79, 238, 186, 0.25),
      0 4px 12px rgba(159, 168, 218, 0.2);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
    transition: all 0.1s ease;
  }

  &:disabled {
    opacity: 0.6;
    transform: none;
    box-shadow: 0 4px 16px rgba(63, 81, 181, 0.15);
  }

  .v-icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
}

.response-code {
  background: rgba(248, 250, 252, 0.8) !important;
  border-radius: 12px !important;
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace !important;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

// Premium Animations
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes luxury-glow {
  0%,
  100% {
    box-shadow:
      0 0 20px rgba(79, 238, 186, 0.2),
      0 0 40px rgba(63, 81, 181, 0.1);
  }
  50% {
    box-shadow:
      0 0 30px rgba(79, 238, 186, 0.4),
      0 0 60px rgba(63, 81, 181, 0.2);
  }
}

// Responsive adjustments
@media screen and (max-width: 768px) {
  .crypto-hero-section {
    .crypto-title {
      font-size: 2.5rem !important;
    }

    .crypto-stats {
      .v-chip {
        margin: 4px;
      }
    }
  }

  .deposit-form-card {
    margin: 16px;
    padding: 24px !important;
  }
}

@media screen and (max-width: 360px) {
  #deposit {
    padding: 0;
  }

  .crypto-hero-section {
    padding: 32px 16px;
  }

  .crypto-title {
    font-size: 2rem !important;
  }
}
</style>
