<template>
    <div id="app">
        <div class="row flex-center flex-middle">
            <label for="msg">Message</label>
            <input class="margin" type="text" id="msg" v-model="message">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WebSocket',
        data() {
            return {
                message: '',
                socket: null,
            }
        },
        methods: {
            handle(data) {
                console.log(data);
                let received = JSON.parse(data)
            },
            getWebSocketURL() {
                if (window.location.port === '3333') {
                    return 'ws://localhost:8000/ws/123'
                }
                return ((window.location.protocol === 'https:') ? 'wss://' : 'ws://') + window.location.host + '/ws/' +
                    this.$router.currentRoute.query['room']
            },
        },
        created() {
            if (this.socket) this.socket.close()
            this.socket = new WebSocket(this.getWebSocketURL())
            this.socket.onclose = function (evt) {
                let explanation = ''
                if (evt.reason && evt.reason.length > 0) {
                    explanation = "reason: " + evt.reason
                } else {
                    explanation = "without a reason specified"
                }
                console.log("Disconnected with close code " + evt.code + " and " + explanation)
            }
            let vm = this
            this.socket.onmessage = function (event) {
                vm.handle(event.data.toString())
            }
        }
    }
</script>

