<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :favoureiteMoviesCount="movies.filter((c) => c.favourite).length"
      />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="onUpdateTermHandler" />
        <AppFilter
          :updateFilterHandler="onUpdateFilterHandler"
          :filterName="filter"
        />
      </div>
      <Box v-if="!movies.length && !isLoading">
        <p class="text-center fs-3 text-danger">kinolar yoq</p>
      </Box>
      <Box v-else-if="isLoading" class="d-flex justify-content-center">
        <Loader />
      </Box>
      <MoveList
        v-else
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandle"
        @onRemove="onRemoveHanler"
      />
      <Box class="d-flex justify-content-center" v-if="totalPage > 1">
        <nav aria-label="pagination">
          <ul class="pagination">
            <li
              v-for="pageNumber in totalPage"
              :key="pageNumber"
              :class="{ active: pageNumber === page }"
              @click="changePageHandler(pageNumber)"
            >
              <span class="page-link">{{ pageNumber }}</span>
            </li>
          </ul>
        </nav>
      </Box>

      <MoveAddForm @creatMovie="creatMovie" />
    </div>
  </div>
</template>

<script>
import AppInfo from "../app-info/AppInfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilter from "../app-filter/AppFilter.vue";
import MoveList from "../move-list/MoveList.vue";
import MoveAddForm from "../move-edd-form/MoveAddForm.vue";
import axios from "axios";
import Box from "@/uiCompanents/Box.vue";

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MoveList,
    MoveAddForm,
  },

  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 2,
      page: 1,
      totalPage: 0,
    };
  },
  methods: {
    async creatMovie(item) {
      try {
        const response = await axios.post("http://localhost:3000/movies", item);

        this.movies.push(response.data);
      } catch (error) {
        alert(error.message);
      }
    },
    onToggleHandle({ id, prop }) {
      console.log(prop);

      this.movies = this.movies.map((item) => {
        if (item.id == id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },
    async onRemoveHanler(id) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/movies/${id}`
        );
        console.log(response);
        this.movies = this.movies.filter((c) => c.id != id);
      } catch (error) {
        alert(error.message);
      }
    },
    onSearchHandler(arr = [], term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);

        case "mostViewers":
          return arr.filter((c) => c.viewers > 500);
        default:
          return arr;
      }
    },

    onUpdateFilterHandler(filter) {
      this.filter = filter;
    },
    onUpdateTermHandler(term) {
      this.term = term;
    },
    async fetchMovie() {
      try {
        this.isLoading = true;

        const response = await axios.get("http://localhost:3000/movies", {
          params: { _limit: this.limit, _page: this.page },
        });

        const newArr = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          like: false,
          favourite: false,
          viewers: item.id * 10,
        }));

        const totalMovies = response.data
        const totalMoviesCount = totalMovies.length
        console.log("totalcountmovies", this.totalMoviesCount);

        console.log('limit',this.limit);
        this.totalPage = Math.ceil(totalMoviesCount / this.limit);
        console.log("totalPage ", this.totalPage);

        this.movies = newArr;


        this.isLoading = false;

      } catch (error) {
        alert(error.message);
        this.isLoading = false;
      }
    },

    changePageHandler(page) {
      this.page = page;
      this.fetchMovie();
    },
  },
  mounted() {
    this.fetchMovie();
  },
};
</script>

<style>
.app {
  background-color: rgb(15, 15, 16);
  height: 100vh;
  color: black;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: green;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 15);
}
</style>
