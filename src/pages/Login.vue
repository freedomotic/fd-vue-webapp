<template>

  <q-layout>
    <q-page-container>
      <q-page class="bg-secondary flex flex-center">

        <div class="full-width">

          <div class="row justify-center">
            <div class="col-xs-10 col-sm-6 col-md-5 col-lg-4">

              <q-card color="white">
                <q-card-section class="q-px-xl q-py-md">
                  <q-img src="/statics/img/freedomotic-logo.png" />
                </q-card-section>

                <ValidationObserver
                  ref="form"
                  v-slot="{ passes, invalid }"
                >
                  <!-- <q-form
                    @submit="passes(signIn)"
                    class="q-gutter-md"
                  > -->
                  <q-card-section>
                    <transition
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut"
                    >
                      <q-banner
                        v-show="showError"
                        class="bg-red text-white"
                      >
                        <template #avatar>
                          <q-icon name="error" />
                        </template>
                        Invalid details submitted
                      </q-banner>
                    </transition>

                    <ValidationProvider
                      ref="input"
                      name="name"
                      rules="required"
                      v-slot="{ errors, invalid, validated }"
                    >
                      <q-input
                        label="Username"
                        v-model="details.name"
                        :error="invalid && validated"
                        :error-message="errors[0]"
                      />
                    </ValidationProvider>

                    <ValidationProvider
                      ref="input"
                      name="password"
                      rules="required"
                      v-slot="{ errors, invalid, validated }"
                    >
                      <q-input
                        label="Password"
                        type="password"
                        v-model="details.password"
                        :error="invalid && validated"
                        :error-message="errors[0]"
                      />
                    </ValidationProvider>
                  </q-card-section>
                  <q-card-actions
                    class="q-pa-md"
                    align="between"
                  >
                    <q-checkbox
                      v-model="details.rememberMe"
                      label="remember me"
                      class="text-tertiary"
                      :disable="isSubmitted"
                    />
                    <q-btn
                      icon="check"
                      label="sign in"
                      color="positive"
                      @click="passes(signIn)"
                      :disable="invalid || submitting"
                    />
                  </q-card-actions>
                  <!-- </q-form> -->
                </ValidationObserver>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { login } from '../layer/auth'
import { InputMixin } from '../mixins'
import { SET_AUTH } from '../store/mutation-types'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  mixins: [InputMixin]
})
export default class LoginPage extends Vue {
  showError = false
  details = {
    name: null,
    password: null,
    rememberMe: false
  }

  $refs!: {
    form: InstanceType<typeof ValidationObserver>
  }

  async signIn() {
    try {
      const { form } = this.$refs
      const valid = await form.validate()
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
  }

  @Watch('details', { deep: true })
  private handler() {
    if (this.showError) {
      this.showError = false
    }
  }
}
</script>
