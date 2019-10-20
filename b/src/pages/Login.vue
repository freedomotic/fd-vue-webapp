<template>
  <div class="window-height bg-secondary">
    <div class="absolute-center full-width">
      <div class="row justify-center">
        <div class="col-xs-10 col-sm-6 col-md-5 col-lg-4">
          <q-card color="white">
            <q-card-media class="q-pa-md">
              <div class="row justify-center">
                <div class="col-auto">
                  <img src="~assets/freedomotic-logo.png" class="responsive" >
                </div>
              </div>
            </q-card-media>
            <q-card-main>
              <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <q-alert
                  v-show="showError"
                  icon="error"
                >Invalid details submitted</q-alert>
              </transition>
              <q-field
                :error="errors.has('username')"
                :error-label="errors.first('username')"
              >
                <q-input
                  name="username"
                  float-label="Username"
                  v-validate="'required'"
                  v-model="details.username"
                  :after="invalidIcon('username')"
                  :disable="isSubmitted"
                />
              </q-field>
              <q-field
                :error="errors.has('password')"
                :error-label="errors.first('password')"
              >
                <q-input
                  name="password"
                  float-label="Password"
                  type="password"
                  v-validate="'required'"
                  v-model="details.password"
                  :after="invalidIcon('password')"
                  :disable="isSubmitted"
                />
              </q-field>
            </q-card-main>
            <q-card-actions class="q-pa-md" align="between">
              <q-checkbox
                v-model="details.remember"
                label="remember me"
                class="text-tertiary"
                :disable="isSubmitted"
              />
              <q-btn
                icon="check"
                label="sign in"
                color="positive"
                :loading="isSubmitted"
                @click="toggleSubmit(signIn, $event)"
                :disable="isInvalid || submitting"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../layer/auth'
import { InputMixin } from '../mixins'
import { noop } from 'quasar-framework'
import { SET_AUTH } from '../store/mutation-types'

export default {
  mixins: [InputMixin],
  data: () => ({
    showError: false,
    details: {
      username: null,
      password: null,
      remember: false
    }
  }),
  watch: {
    details: {
      deep: true,
      handler() {
        if (this.showError) {
          this.showError = false
        }
      }
    }
  },
  methods: {
    async signIn(done = noop) {
      try {
        const valid = await this.$validator.validateAll()
        if (valid) {
          const data = await login(this.details)
          this.$store.commit(SET_AUTH, data)
          this.$router.push({
            name: 'home'
          })
        }
      } catch (e) {
        console.error(e)
        this.showError = true
      }
      done()
    }
  }
}
</script>
