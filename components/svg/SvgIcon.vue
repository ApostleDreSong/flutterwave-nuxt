<template>
    <div ref="svgDecoded" />
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    watch: {
        icon(current) {
            if(process.client && this.$refs.svgDecoded) {
                this.loadIcon(current)
            }
        }
    },
    mounted() {
        this.loadIcon(this.icon)
    },
    methods: {
        loadIcon(icon) {
            if(process.client && this.$refs.svgDecoded) {
                const svgFile = require(`~/static/assets/${icon}.svg`);
                if(svgFile && process.client) {
                    const svgBase64 = svgFile.replace('data:image/svg+xml;base64,', '');
                    const svgDecoded = window.atob(svgBase64);
                    this.$refs.svgDecoded.innerHTML = svgDecoded;
                }
            }
        }
    }
}
</script>