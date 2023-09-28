<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/half-off-products">Half Off Products</router-link>
        <div class="cart">
            CART <span>+</span>
        </div>
    </nav>
</template>

<style lang="scss">
@import './Header.scss';
</style>