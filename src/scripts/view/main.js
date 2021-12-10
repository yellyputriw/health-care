// Components
import '../components/appbar';
import '../components/hero';
import '../components/about';
import '../components/symptom';
import '../components/prevent';
import '../components/statistic';
import '../components/footer';

// Data
import select from '../data/country-list';
import showdata from '../data/data-covid';
import '../data/time';

document.getElementById('countryCode').addEventListener('change', () => {
  showdata();
});

select();
