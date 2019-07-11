<template>
    <div>
        <p>home page</p>
        <p>{{ $t('message') }}</p>
        <router-link :to="`/${$i18n.locale}/auth`">auth</router-link>
        <langs-comp></langs-comp>

    </div>
</template>

<script>
import LangsComp from './../components/LangsComp'

export default {
    components: {
        LangsComp
    }
}
</script>

<style>

</style>
