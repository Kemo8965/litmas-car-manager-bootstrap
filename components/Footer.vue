<script>
/**
 * Footer component
 */
export default {};
</script>

<template>
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">{{ new Date().getFullYear()}} © Litmas Car Manager.</div>
            <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                    Crafted with
                    <i class="mdi mdi-heart text-danger"></i> by
                    <a href="https://piranhasystems.com/" target="_blank" class="text-reset">Piranha Systems</a>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
