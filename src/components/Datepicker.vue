<template>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <span class="ft-calendar font-medium-2"></span>
        </span>
      </div>
      <input
        ref="datepicker"
        type="text"
        :placeholder="placeholder"
        class="form-control pickadate"
      />
    </div>
  </template>
  
  <script>

import Pickadate from "pickadate";
  export default {
    props: {
      value: {
        type: String,
        default: "",
      },
      placeholder: {
        type: String,
        default: "Select Date",
      },
    },
    mounted() {
      this.initDatePicker();
    },
    methods: {
      initDatePicker() {
        const options = {
          format: "yyyy-mm-dd", // Change the date format as needed
          // Add other options for Pickadate.js here
        };
  
        // Initialize Pickadate.js date picker
        const picker = new Pickadate(this.$refs.datepicker, options);
  
        // Set the initial date value (if available)
        if (this.value) {
          picker.set("select", this.value, { format: "yyyy-mm-dd" });
        }
  
        // Listen for date change events and update the component value
        picker.on("set", (event) => {
          if (event.select) {
            this.$emit("input", event.select);
          }
        });
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for the date picker component here */
  </style>