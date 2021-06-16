<template>
  <div class="hello">
    <h1 class="mb-3">Please provide the following information</h1>

    <div v-show="success" class="alert alert-success" role="alert">
      Form was successfully submitted, you can now provide more informating if
      you wish.
    </div>
    <form id="information" name="information" method="POST" @submit="checkForm">
      <div class="row mb-3">
        <label for="company" class="col-sm-2 form-label">Company name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="col-sm-10 form-control"
            id="company"
            name="company"
            v-model="company"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="email" class="col-sm-2 form-label">Email address</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="col-sm-10 form-control"
            id="email"
            name="email"
            v-model="email"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="phonenumber" class="col-sm-2 form-label">Phonenumber</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="col-sm-10 form-control"
            id="phonenumber"
            name="phonenumber"
            v-model="phonenumber"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="subdomain" class="col-sm-2 form-label">Subdomain</label>
        <div class="col-sm-10">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="subdomain"
              name="subdomain"
              v-model="subdomain"
              aria-describedby="subdomainHelp"
              required
              pattern="[a-z0-9-]+"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">.2solar.nl</span>
            </div>
          </div>
        </div>
        <div class="col-sm-10 offset-sm-2">
          <div id="subdomainHelp" class="form-text">
            (for example 'essent' to get essent.2solar.nl, only lowercase
            characters, numbers and hyphens are allowed)
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="logo" class="col-sm-2 form-label">Logo</label>
        <div class="col-sm-10">
          <input
            type="file"
            class="col-sm-10 form-control"
            :class="{ 'is-invalid': 'logo' in this.errors }"
            id="logo"
            name="logo"
            ref="logo"
            aria-describedby="subdomainHelp"
            accept=".jpg,.png"
            v-on:change="handleLogoUpload()"
            required
          />
        </div>
        <div class="col-sm-10 offset-sm-2">
          <div id="subdomainHelp" class="form-text">
            (allowed file types: .jpg, .png)
            <div v-show="errors.logo" class="alert alert-danger" role="alert">
              {{ errors.logo }}
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="quote" class="col-sm-2 form-label">Example quote</label>
        <div class="col-sm-10">
          <input
            type="file"
            class="col-sm-10 form-control"
            :class="{ 'is-invalid': 'quote' in this.errors }"
            id="quote"
            name="quote"
            ref="quote"
            aria-describedby="quoteHelp"
            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            @change="handleQuoteUpload()"
          />
        </div>
        <div class="col-sm-10 offset-sm-2">
          <div id="quoteHelp" class="form-text">
            (allowed file types: .pdf, .doc, .docx)
            <div v-show="errors.quote" class="alert alert-danger" role="alert">
              {{ errors.quote }}
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="quote-template" class="col-sm-2 form-label"
          >Quote template</label
        >
        <div class="col-sm-10">
          <input
            type="file"
            class="col-sm-10 form-control"
            :class="{ 'is-invalid': 'quoteTemplate' in this.errors }"
            id="quote-template"
            name="quote-template"
            ref="quoteTemplate"
            aria-describedby="quote-templateHelp"
            accept=".pdf"
            required
            @change="handleQuoteTemplateUpload()"
          />
        </div>
        <div class="col-sm-10 offset-sm-2">
          <div id="quote-templateHelp" class="form-text">
            (allowed file types: .pdf)
            <div
              v-show="errors.quoteTemplate"
              class="alert alert-danger"
              role="alert"
            >
              {{ errors.quoteTemplate }}
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="pricelist" class="col-sm-2 form-label">Pricelist</label>
        <div class="col-sm-10">
          <input
            type="file"
            class="col-sm-10 form-control"
            :class="{ 'is-invalid': 'pricelist' in this.errors }"
            id="pricelist"
            name="pricelist"
            ref="pricelist"
            aria-describedby="pricelistHelp"
            accept=".csv"
            required
            @change="handlePricelistUpload()"
          />
        </div>
        <div class="col-sm-10 offset-sm-2">
          <div id="pricelistHelp" class="form-text">
            (allowed file types: .csv)
            <div
              v-show="errors.pricelist"
              class="alert alert-danger"
              role="alert"
            >
              {{ errors.pricelist }}
            </div>
          </div>
        </div>
      </div>
      <fieldset>
        <legend>Users</legend>
        <p>Create as many users as you would like.</p>
        <div class="row">
          <div class="col-3">Name</div>
          <div class="col-4">Email address</div>
          <div class="col-4">Role</div>
        </div>
        <div id="users" class="mb-3">
          <div class="row mb-3" v-for="(user, index) in users" :key="index">
            <div class="col-3">
              <input
                type="text"
                class="form-control"
                id="user-name[]"
                name="user-name[]"
                v-model="user.name"
                required
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                class="form-control"
                id="user-email[]"
                name="user-email[]"
                v-model="user.email"
                required
              />
            </div>
            <div class="col-4">
              <select
                name="user-role[]"
                class="form-select"
                v-model="user.role"
                required
              >
                <option value="" selected>Choose...</option>
                <option value="administrator">administrator</option>
                <option value="manager">manager</option>
                <option value="sales">sales</option>
                <option value="customer service">customer service</option>
                <option value="technician">technician</option>
              </select>
            </div>
            <div class="col-1">
              <span
                class="btn btn-danger remove-user"
                @click="removeUser(index)"
              >
                <b-icon icon="x"></b-icon>
              </span>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-2">
            <span id="addUser" class="btn btn-secondary" @click="addUser">
              Add user
            </span>
          </div>
          <div class="col-sm-10">
            <div
              v-show="users.length >= 3"
              class="alert alert-warning"
              role="alert"
            >
              Up to 3 users are included in a standard license. Adding more
              users will add additonal costs.
            </div>
          </div>
        </div>
      </fieldset>
      <div class="row">
        <div class="col-sm-10">
          <ProgressBar :progress="progress"></ProgressBar>
        </div>
        <div class="col-sm-2">
          <button
            type="submit"
            class="btn btn-primary"
            :class="{ disabled: this.progress < 100 }"
            :disabled="this.progress < 100 ? true : false"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "InformationForm",
  components: {
    ProgressBar,
  },
  data: function() {
    return {
      company: "",
      email: "",
      phonenumber: "",
      subdomain: "",
      logo: "",
      quote: "",
      quoteTemplate: "",
      pricelist: "",
      users: [],
      progress: 0,
      errors: {},
      success: false,
    };
  },
  watch: {
    company: function() {
      this.updateProgress();
    },
    email: function() {
      this.updateProgress();
    },
    phonenumber: function() {
      this.updateProgress();
    },
    subdomain: function() {
      this.updateProgress();
    },
    logo: function() {
      this.updateProgress();
    },
    quote: function() {
      this.updateProgress();
    },
    quoteTemplate: function() {
      this.updateProgress();
    },
    pricelist: function() {
      this.updateProgress();
    },
  },
  methods: {
    updateProgress() {
      const fields = [
        this.company,
        this.email,
        this.phonenumber,
        this.subdomain,
        this.logo,
        this.quote,
        this.quoteTemplate,
        this.pricelist,
      ];
      this.progress =
        100 -
        ((fields.length - fields.filter(String).length) * 100) / fields.length;
    },
    addUser: function() {
      this.users.push({
        name: "",
        email: "",
        role: "",
      });
    },
    removeUser: function(index) {
      this.users.splice(index, 1);
    },
    checkForm: function(e) {
      e.preventDefault();
      let formData = new FormData();

      formData.append("company", this.company);
      formData.append("email", this.email);
      formData.append("phonenumber", this.phonenumber);
      formData.append("subdomain", this.subdomain);

      formData.append("logo", this.logo);
      formData.append("quote", this.quote);
      formData.append("quoteTemplate", this.quoteTemplate);
      formData.append("pricelist", this.pricelist);

      if (this.users.length > 0) {
        formData.append("users", this.users);
      }

      // API CALLS to backend
      console.log("Perform backend API call and lets asume its all ok.");

      // RESET FORM DATA
      this.company = "";
      this.email = "";
      this.phonenumber = "";
      this.subdomain = "";
      this.logo = "";
      this.quote = "";
      this.quoteTemplate = "";
      this.pricelist = "";
      this.users = [];
      this.progress = 0;
      this.errors = {};

      this.$refs.logo.value = null;
      this.$refs.quote.value = null;
      this.$refs.quoteTemplate.value = null;
      this.$refs.pricelist.value = null;

      this.success = true;
    },
    handleLogoUpload: function() {
      const file = this.$refs.logo.files[0];
      if (file && ["jpg", "png"].includes(file.name.split(/[.]+/).pop())) {
        this.logo = file;
        delete this.errors.logo;
      } else {
        this.errors.logo = "Invalid file type selected";
        this.logo = null;
      }
    },
    handleQuoteUpload: function() {
      this.quote = this.$refs.quote.files[0];
      const file = this.$refs.quote.files[0];
      if (
        file &&
        ["pdf", "doc", "docx"].includes(file.name.split(/[.]+/).pop())
      ) {
        this.quote = file;
        delete this.errors.quote;
      } else {
        this.errors.quote = "Invalid file type selected";
        this.quote = null;
      }
    },
    handleQuoteTemplateUpload: function() {
      this.quoteTemplate = this.$refs.quoteTemplate.files[0];
      const file = this.$refs.quoteTemplate.files[0];
      if (file && ["pdf"].includes(file.name.split(/[.]+/).pop())) {
        this.quoteTemplate = file;
        delete this.errors.quoteTemplate;
      } else {
        this.errors.quoteTemplate = "Invalid file type selected";
        this.quoteTemplate = null;
      }
    },
    handlePricelistUpload: function() {
      this.pricelist = this.$refs.pricelist.files[0];
      const file = this.$refs.pricelist.files[0];
      if (file && ["csv"].includes(file.name.split(/[.]+/).pop())) {
        this.pricelist = file;
        delete this.errors.pricelist;
      } else {
        this.errors.pricelist = "Invalid file type selected";
        this.pricelist = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
