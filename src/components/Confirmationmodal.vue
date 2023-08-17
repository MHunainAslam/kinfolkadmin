<template>
    <div class="modalcss modal fade text-left show d-block" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"
        aria-hidden="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-body">

                    <h5>Are You Sure?</h5>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="iamsurefun">Yes</button>
                    <button type="button" class="btn bg-light-secondary" @click="closemodal()"
                        data-dismiss="modal">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        iamsuresend: {
            type: Function,
            required: true,
        },
        showmodalsend: {
            type: Function,
            required: true
        }
    },
    methods: {
        closemodal() {
            this.showmodalsend();
        },
        iamsurefun() {
            // Call the iamsure() function passed from the parent component
            this.iamsuresend();
        },
    },

}
</script>

<style></style>